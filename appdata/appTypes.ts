export type Member= string;
export type Instrument= string;
export type Category = "percussions" | "bass" | "guitar" | "string" | "wind" | "keyboards" | "tech / computer" | "vocal";
export type SignalMode= "mono" | "stereo";
export type SignalSource= {
    sourceType: "mic" | "di";
    micRef: string | undefined;
    use48v: boolean;
    diInput: "rca" | "jack" | "mini-jack" | undefined;
    provided: boolean;
};
export type Stand= {
    standType: "grand pied" | "moyen pied" | "petit pied" | "pince";
    provided: boolean;
};
export type Input= {
    assignedToCategory: Category;
    assignedToInstrument: Instrument;
    assignedToMember: Member | [Member];
    mode: SignalMode;
    source: SignalSource;
    micStand: Stand;
    informations: string | null;
}
