class RemoveColumnFromCocktails < ActiveRecord::Migration[5.2]
  def change
    remove_column :cocktails, :likes, :integer
  end
end
