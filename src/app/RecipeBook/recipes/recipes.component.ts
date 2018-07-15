import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../Models/recipe.model';
import { RecipeService } from '../../Services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeSeleted: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.recipeSeleted = recipe;
    });
  }

}
