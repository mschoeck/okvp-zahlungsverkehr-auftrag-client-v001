import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Auftrag } from './auftrag';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataAuftragService implements InMemoryDbService {
  createDb() {  
    const auftragsliste : Auftrag[] = [
      { id: 11, art: 'Überweisung', empfaengerName: "Schöcki World", empfaengerInstitut: 'VR Bank', 
        empfaengerIBAN: 'DE43 2000 3000 4000 5000 600', empfaengerBIC: 'VRBXYZNXQ', 
        betrag: 500, verwendung: 'Rechnung 0815', sofertausfuehren: true, ausfuehrenZum: null, 
        senderKontoart: 'Girokonto', senderIBAN: 'DE43 1000 2000 3000 4444 555', senderBIC: 'VRBXBXZZ', 
        erfasser: 'ycm4444', status: 'Erfasst', prozessId: null },
      { id: 12, art: 'Dauerauftrag',empfaengerName: 'Nikolaus', empfaengerInstitut: 'Raiffeisenbank', 
        empfaengerIBAN: 'DE43 1000 2000 3000 4000 500', empfaengerBIC: 'RBB787YZY', 
        betrag: 15, verwendung: 'Auftragnr. 124881', sofertausfuehren: false, ausfuehrenZum: new Date(2018,12,6), 
        senderKontoart: 'Girokonto', senderIBAN: 'DE43 1000 2000 3000 4444 555', senderBIC: 'VRBXBXZZ',  
        erfasser: 'ycm4444', status: 'Erfasst', prozessId: null },
      { id: 13, art: 'Überweisung', empfaengerName: 'Meister AG', empfaengerInstitut: 'VR Bank', 
        empfaengerIBAN: 'DE43 8989 9999 8989 9999 898', empfaengerBIC: 'VBRBARZ', 
        betrag: 1599, verwendung: 'X4567RZ03', sofertausfuehren: true, ausfuehrenZum: null, 
        senderKontoart: 'Girokonto', senderIBAN: 'DE43 1000 2000 3000 4444 555', senderBIC: 'VRBXBXZZ', 
        erfasser: 'ycm5555', status: 'Erfasst', prozessId: null},
      { id: 14, art: 'Überweisung', empfaengerName: 'Agile Camp', empfaengerInstitut: 'Raiffeisenbank', 
        empfaengerIBAN: 'FR76 1000 1000 1000 1000 100', empfaengerBIC: 'RBVBBVX', 
        betrag: 150, verwendung: 'Rnr 20181101', sofertausfuehren: false, ausfuehrenZum: new Date(2018,4,23), 
        senderKontoart: 'Girokonto', senderIBAN: 'DE43 6767 7676 6767 7676 676', senderBIC: 'VRBXBXZZ', 
        erfasser: 'ycm6666', status: 'Erfasst', prozessId: null },
      { id: 15, art: 'Terminüberweisung',empfaengerName: 'Mr. Computer', empfaengerInstitut: 'Deutsche Bank', 
        empfaengerIBAN: 'DE43 4242 0000 4242 0000 424', empfaengerBIC: 'DBXYZXYZ', 
        betrag: 50, verwendung: 'Gehalt 1118', sofertausfuehren: true, ausfuehrenZum: null, 
        senderKontoart: 'Girokonto', senderIBAN: 'DE43 6767 7676 6767 7676 676', senderBIC: 'VRBXBXZZ',
        erfasser: 'ycm6666', status: 'Erfasst', prozessId: null }
    ];
    return {auftragsliste};
  }

  // Overrides the genId method to ensure that a auftrag always has an id.
  // If the auftrag array is empty,
  // the method below returns the initial number (11).
  // if the auftragsliste array is not empty, the method below returns the highest
  // auftrag id + 1.
  genId(auftragsliste: Auftrag[]): number {
    return auftragsliste.length > 0 ? Math.max(...auftragsliste.map(auftrag => auftrag.id)) + 1 : 11;
  }
}
