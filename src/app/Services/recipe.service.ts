import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../../Models/recipe.model';
import { Ingredient } from '../../Models/Ingredient.model';
import { ShoppingListService } from './shopping-list.service';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe(
      'A Test Recipe',
      'This is a simple test',
      'http://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg',
      [
        new Ingredient('Bread', 1),
        new Ingredient('Milk', 1),
        new Ingredient('Eggs', 10)
      ]),
    // tslint:disable-next-line:max-line-length
    new Recipe(
      'Another Test Recipe',
      'This is a simple test',
      'https://img.delicious.com.au/52hfFIjf/h506-w759-cfill/del/2017/05/one-pot-butter-chicken-with-dill-yoghurt-46876-2.jpg',
    [
      new Ingredient('Salt', 5),
      new Ingredient('Butter', 1),
      new Ingredient('Salt', 6)
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    // slice returns a copy
    return this.recipes.slice();
  }

  onAddIngredintToShoppingList(ingredints: Ingredient[]) {
    this.shoppingListService.addMultiIngredints(ingredints);
  }
}
