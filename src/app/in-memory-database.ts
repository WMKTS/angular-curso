import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataBase implements InMemoryDataBase{
    createDb(){
        const categories = [
            { id: 1, name: "Cão", description: "Cães de todas as raças" },
            { id: 2, name: "Felinos", description: "Gatos de todas as Raças" },
            { id: 3, name: "Aves", description: "Aves de todas as raças" },
            { id: 4, name: "Répteis", description: "Calangos, Cobras, Camaleões" },
            { id: 5, name: "Diversos", description: "Animais Diversos" }
        ];
        return {categories}
    }
}