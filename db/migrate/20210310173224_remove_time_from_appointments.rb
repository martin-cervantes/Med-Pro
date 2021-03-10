class RemoveTimeFromAppointments < ActiveRecord::Migration[6.1]
  def change
    remove_column :appointments, :time, :time
    add_column :appointments, :time, :string

    remove_column :doctors, :username, :string
    remove_column :doctors, :password, :string
    remove_column :patients, :username, :string
    remove_column :patients, :password, :string
  end
end
