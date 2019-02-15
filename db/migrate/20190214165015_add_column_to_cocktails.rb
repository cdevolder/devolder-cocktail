class AddColumnToCocktails < ActiveRecord::Migration[5.2]
  def change
    add_column :cocktails, :likes, :integer, default: 0
  end
end
