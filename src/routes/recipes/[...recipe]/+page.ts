import recipes from '../../../recipes.json';
import { urlifyName } from '../../../utils/normalise';


export const load = ({ params }) => {
    return {
        recipe: recipes.filter((recipe) => urlifyName(recipe.name) === params.recipe)[0]
    }
}
