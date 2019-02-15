class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  def home
    @first_cocktail = Cocktail.order('created_at DESC').first
    @user = current_user
  end
end
