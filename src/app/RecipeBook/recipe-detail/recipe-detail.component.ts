import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../Models/recipe.model';
import { RecipeService } from '../../Services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.recipeService.onAddIngredintToShoppingList(this.recipe.ingredients);
  }
}
