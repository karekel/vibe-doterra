import { questions, PersonalityType, PhaseType } from "./questions";

export interface DiagnosticResult {
    personality: PersonalityType;
    phase: PhaseType;
}

export const calculateResult = (answers: number[]): DiagnosticResult => {
    // Personality calculation (Q1-Q10)
    const personalityVotes: Record<PersonalityType, number> = {
        EL: 0,
        EF: 0,
        IL: 0,
        IF: 0,
    };

    for (let i = 0; i < 10; i++) {
        const question = questions[i];
        const answerIndex = answers[i];
        if (answerIndex !== undefined) {
            const vote = question.choices[answerIndex].typeVote;
            if (vote) personalityVotes[vote]++;
        }
    }

    // Determine personality
    let personality: PersonalityType;
    const maxPersonalityVote = Math.max(...Object.values(personalityVotes));
    const topPersonalities = (Object.keys(personalityVotes) as PersonalityType[]).filter(
        (k) => personalityVotes[k] === maxPersonalityVote
    );

    if (topPersonalities.length === 1) {
        personality = topPersonalities[0];
    } else {
        const E = personalityVotes.EL + personalityVotes.EF;
        const I = personalityVotes.IL + personalityVotes.IF;
        const L = personalityVotes.EL + personalityVotes.IL;
        const F = personalityVotes.EF + personalityVotes.IF;

        const isE = E >= I;
        const isL = L >= F;

        if (isE && isL) personality = "EL";
        else if (isE && !isL) personality = "EF";
        else if (!isE && isL) personality = "IL";
        else personality = "IF";
    }

    // Phase calculation (Q11-Q20)
    const phaseVotes: Record<Exclude<PhaseType, "AMBIVALENCE">, number> = {
        DETOX: 0,
        ACTIVE: 0,
        HEALING: 0,
        EXPRESSION: 0,
    };

    for (let i = 10; i < 20; i++) {
        const question = questions[i];
        const answerIndex = answers[i];
        if (answerIndex !== undefined) {
            const vote = question.choices[answerIndex].phaseVote;
            if (vote) phaseVotes[vote]++;
        }
    }

    const phaseKeys: Exclude<PhaseType, "AMBIVALENCE">[] = ["DETOX", "ACTIVE", "HEALING", "EXPRESSION"];

    // Sort by votes, then by tie-break logic (Key Q11, then Q20)
    const sortedPhases = [...phaseKeys].sort((a, b) => {
        if (phaseVotes[b] !== phaseVotes[a]) return phaseVotes[b] - phaseVotes[a];

        // Q11 (Index 10) tie-break
        const q11Vote = questions[10].choices[answers[10]]?.phaseVote;
        if (q11Vote === a) return -1;
        if (q11Vote === b) return 1;

        // Q20 (Index 19) tie-break
        const q20Vote = questions[19].choices[answers[19]]?.phaseVote;
        if (q20Vote === a) return -1;
        if (q20Vote === b) return 1;

        return 0;
    });

    let phase: PhaseType = sortedPhases[0];

    // Neutral logic
    const top1Phase = sortedPhases[0];
    const top2Phase = sortedPhases[1];
    const diff = phaseVotes[top1Phase] - phaseVotes[top2Phase];

    const q11Phase = questions[10].choices[answers[10]]?.phaseVote;
    const q20Phase = questions[19].choices[answers[19]]?.phaseVote;

    if (diff <= 1 && q11Phase !== q20Phase) {
        phase = "AMBIVALENCE";
    }

    return { personality, phase };
};
