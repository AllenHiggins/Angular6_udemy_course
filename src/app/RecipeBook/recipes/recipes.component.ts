import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../Models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeSeleted: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
