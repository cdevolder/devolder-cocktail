class Api::V1::CocktailsController < ApplicationController
  def index
    cocktails = Cocktail.all
    render json: cocktails
  end

  def show
    cocktail = Cocktail.find(params[:id])
    render json: cocktail
  end

  def create
  end

  def update
  end

  def destroy
  end
end
