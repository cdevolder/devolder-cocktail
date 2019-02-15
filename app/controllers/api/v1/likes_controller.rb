class Api::V1::LikesController < ApplicationController
  def index
    likes = current_user.likes.map {|e| e.cocktail_id}
    render json: likes
  end

  def create
    cocktail_id = params[:cocktail]
    user = current_user
    like = Like.where(cocktail_id: cocktail_id, user_id: user.id).last
    if like
      like.delete
      likes = user.likes.map {|e| e.cocktail_id}
      render json: likes
    else
      new_like = Like.create!(
        cocktail_id: cocktail_id,
        user_id: user.id
      )
      new_like.save
      likes = user.likes.map {|e| e.cocktail_id}
      render json: likes
    end
  end
end
