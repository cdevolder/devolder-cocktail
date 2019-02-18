class Api::V1::CocktailsController < ApplicationController

  def index
    cocktails = Cocktail.order('created_at DESC')
    render json: cocktails
  end

  def show
    cocktail = Cocktail.find(params[:id])
    render json: cocktail
  end

  def update
    sleep(0.1)
    cocktail = Cocktail.find(params[:cocktail])
    likes_count = Like.where(cocktail_id: cocktail.id, user_id: current_user.id).count
    cocktail.amount_of_likes = likes_count
    cocktail.save
    cocktails = Cocktail.order('created_at DESC')
    render json: cocktails
  end
end
