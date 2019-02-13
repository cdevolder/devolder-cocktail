class Cocktail < ApplicationRecord
  belongs_to :user
  has_many :reviews
  has_many :likes

  validates :name, presence: true, uniqueness: true
  validates :description, presence: true

  def as_json(options = {})
    {
      id: id,
      name: name,
      description: description,
      created_at: created_at,
      user_id: self.user.id
    }
  end
end
