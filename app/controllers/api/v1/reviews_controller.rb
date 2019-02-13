class Api::V1::ReviewsController < ApplicationController
  before_action :set_cocktail

  def index
    reviews = @cocktail.reviews.order('created_at ASC')
    render json: reviews
  end

  def create
  end

  def destroy
  end

  private

  def set_cocktail
    @cocktail = Cocktail.find(params[:cocktail_id])
  end
end
