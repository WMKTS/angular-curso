import { InMemoryDbService } from "angular-in-memory-web-api";

import { Category} from "./pages/categories/shared/category.model";

export class InMemoryDataBase implements InMemoryDbService{
    createDb(){
        const categories: Category[] = [
            { id: 1, name: "Cão", description: "Cães de todas as raças" },
            { id: 2, name: "Felinos", description: "Gatos de todas as Raças" },
            { id: 3, name: "Aves", description: "Aves de todas as raças" },
            { id: 4, name: "Répteis", description: "Calangos, Cobras, Camaleões" },
            { id: 5, name: "Diversos", description: "Animais Diversos" }            
        ];
        return {categories}
    }
}