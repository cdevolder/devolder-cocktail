class Api::V1::ReviewsController < ApplicationController
  before_action :set_cocktail

  def index
    reviews = @cocktail.reviews.order('created_at DESC')
    render json: reviews
  end

  def create
    review = Review.create!(
      content: params[:content],
      cocktail_id: params[:cocktail_id],
      user_id: current_user.id
    )
    review.save
    render json: review
  end

  def destroy
  end

  private

  def set_cocktail
    @cocktail = Cocktail.find(params[:cocktail_id])
  end
end
