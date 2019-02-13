class Review < ApplicationRecord
  belongs_to :user
  belongs_to :cocktail

  validates :title, presence: true, uniqueness: true
  validates :content, presence: true

  def as_json(options = {})
    {
      id: id,
      title: title,
      content: content,
      created_at: created_at,
      user_id: self.user.id
    }
  end
end
