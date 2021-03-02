class Patient < ApplicationRecord
  has_many :appointments, dependent: :destroy
  
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, format: { with: /\A[\w+\-.]+@[\w+\-.]*\.[a-z]+\z/i }, presence: true, uniqueness: true
  validates :username, length: { in: 4..12 }, presence: true, uniqueness: true
  validates :password, length: { in: 6..16 }, presence: true
end
