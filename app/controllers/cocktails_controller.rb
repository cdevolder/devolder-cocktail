class CocktailsController < ApplicationController
  def index
    @first_cocktail = Cocktail.order('created_at DESC').first
    @user = current_user
  end

  def new
  end

end
