class Api::V1::CocktailsController < ApplicationController

  def index
    cocktails = Cocktail.order('created_at DESC')
    render json: cocktails
  end

  def show
    cocktail = Cocktail.find(params[:id])
    render json: cocktail
  end

  def create
  end

  def update
    cocktail = Cocktail.find(params[:cocktail])
    if Like.where(cocktail_id: cocktail.id, user_id: current_user.id) != []
      cocktail.amount_of_likes -= 1
    else
      cocktail.amount_of_likes += 1
    end
    cocktail.save
    cocktails = Cocktail.order('created_at DESC')
    render json: cocktails
  end

  def destroy
  end

  private

  def set_cocktail
  end
end
