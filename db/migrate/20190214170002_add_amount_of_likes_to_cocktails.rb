class AddAmountOfLikesToCocktails < ActiveRecord::Migration[5.2]
  def change
    add_column :cocktails, :amount_of_likes, :integer, default: 0
  end
end
