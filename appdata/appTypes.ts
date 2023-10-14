export type Monitor = "Wedge" | "Wedge x2" | "Side" | "In-Ears" | "Headset";

export type Member = {
    name: string;
    monitor?: Monitor;
}

export type Instrument = string;

export type Category = "drum" | "percussions" | "bass" | "guitar" | "string" | "wind" | "keyboards" | "numeric" | "vocal";

export type Element = "Kick In" | "Kick Out" | "kick Triggered" | "Snare Top" | "Snare Bottom" 
    | "Snare Triggered" | "Tom high" | "Tom Mid" | "Tom Floor" | "Tom Triggered" | "hit Hat" 
    | "Cymbal" | "Overhead Left" | "Overhead Center" | "Overhead Right" | "UnderHead Left" | "Underhead Right" 
    | "Congas" | "Bongos" | "Djembe" | "Darbouka" | "Cajon" | "Tambour" | "Gong" | "Tambourin" | "Cymbale" 
    | "Xilophone" | "Marimba" | "Vibraphone" | "Glockenspiel" | "Timbale" | "Gong" | "Triangle" | "Shime" 
    | "Contrebasse" | "Basse Acoustique" | "Basse Electro-Acoustique" | "Basse Electrique" 
    | "Guitare Acoustique" | "Guitare Electro-acoustique" | "Guitare Electrique" 
    | "Ukulele" | "banjo" | "Mandoline" | "Lapsteel" |"PedalSteel" 
    | "Luth" | "Oud" | "Cithare" | "Harpe" 
    | "Violon Acoustique" | "Violon Electrique" | "Alto Acoustique" | "Alto Electrique" 
    | "Violoncelle Acoustique" | "Violoncelle Electrique" | "Viole de Gambe" | "Vielle à Roue" 
    | "Trompette" | "Trombone à Pistons" | "Trombone à Coulisse" | "Saxophone" 
    | "Tuba" | "Cornet" | "Basson" | "Baryton" | "Cor Anglais" | "Didgeridoo" 
    | "Cornet" | "Flûte Traversière" | "Flûte à Bec" | "Flûte à anche Double" 
    | "Flûte de Pan" | "HautBois" | "Ocarina" | "Clarinette" 
    | "Piano Droit" | "Piano à Queue" | "Piano Electrique" | "Piano Numérique" 
    | "Clavier Arrangeur" | "Workstation" | "Batterie Electronique Left" | "batterie Electronique Right" 
    | "Sampler" | "Samplepad" | "laptop" | "mobile" 
    | "Micro Filaire" | "Micro Sans Fil" | "Micro HeadSet Sans fil";

export type SignalMode = "mono" | "stereo";

export type SignalSource = {
    sourceType: "mic" | "di";
    micRef?: string;
    use48v: boolean;
    diInput?: "rca" | "jack" | "mini-jack";
    provided: boolean;
};

export type Stand = {
    standType: "grand pied" | "moyen pied" | "petit pied" | "pince";
    provided: boolean;
};

export type Input = {
    name: string;
    assignedToCategory: Category;
    assignedToElement: Element;
    assignedToInstrument: Instrument;
    assignedToMember: Member | Member[];
    mode: SignalMode;
    source: SignalSource;
    micStand: Stand;
    informations?: string;
}

