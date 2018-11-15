export class ProzessReferenz {
  id: string;
}

export class Aufgabe {
  prozessid: string;
  aufgabeid: string;
  aufgabeart: string;
}

export class Auftragsstatus {
  prozessid: string;
  auftragsid: number;
  auftragsstatus: string;
}

export class Prozessauftrag {
  id: number;
  erfasserid: string;
  ablaufdatum: Date;
  betrag: number;
}

export class Prozessauftragsliste {
  zvauftragsliste: Prozessauftrag[];
}
