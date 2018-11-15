export class Auftrag {

  id: number;
  art: string;
  empfaengerName: string;
  empfaengerInstitut: string;
  empfaengerIBAN: string;
  empfaengerBIC: string;
  betrag: number;
  verwendung: string;
  sofertausfuehren: boolean;
  ausfuehrenZum: Date ;
  senderKontoart: string;
  senderIBAN: string;
  senderBIC: string;
  erfasser: string;
  status: string;
  prozessId: string;
}
