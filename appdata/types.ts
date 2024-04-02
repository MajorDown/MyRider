export type Signal = {
    mode: "mono" | "stereo";
    position: "left" | "center" | "right";
    pairedWith?: InputNumber;
}

export type Monitor = "Wedge" | "Wedge x2" | "Side" | "In-Ears" | "Headset";

export type Member = {
    name: string;
    color: string;
}

// TYPES POUR LES INPUTS

export type InputName = string;

export type InputNumber = 
    1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 |
    33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 
    65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 
    97 | 98 | 99 | 100 | 101 | 102 | 103 | 104 | 105 | 106 | 107 | 108 | 109 | 110 | 111 | 112 | 113 | 114 | 115 | 116 | 117 | 118 | 119 | 120 | 121 | 122 | 123 | 124 | 125 | 126 | 127 | 128;

export type InputCategory = "drum" | "percussions" | "bass" | "guitar" | "string" | "wind" | "keyboards" | "numeric" | "vocal";

export type InputElement = "Kick In" | "Kick Out" | "kick Triggered" | "Snare Top" | "Snare Bottom" 
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

export type InputType = "mic" | "di";
    
export type InputMic = {
    micRef: string;
    isMicProvided: boolean;
    need48v: boolean;
}

export type InputDi = {
    DiLine: "rca" | "jack" | "mini-jack";
    isDiProvided: boolean;
    need48v: boolean;
}

export type InputStand = {
    standType: "grand pied" | "moyen pied" | "petit pied" | "pince" | "none" ;
    isStandProvided: boolean;
};

export type Input = {
    number: InputNumber;
    name: InputName;
    category: InputCategory;
    element: InputElement;
    assignedToMember: Member | Member[];
    signal: Signal;
    type: InputType;
    mic?: InputMic;
    di?: InputDi;
    stand: InputStand;
    informations?: string;
}
