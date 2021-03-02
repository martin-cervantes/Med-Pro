class CreateDoctors < ActiveRecord::Migration[6.1]
  def change
    create_table :doctors do |t|
      t.string :first_name,         null: false, default: 'John'
      t.string :last_name,          null: false, default: 'Doe'
      t.string :email,              null: false, default: 'john_doe@hotcakes.com'
      t.string :medical_speciality, null: false, default: 'General surgery'
      t.string :username,           null: false, default: 'john_doe'
      t.string :password,           null: false, default: 'john_doe123'

      t.timestamps
    end
  end
end
