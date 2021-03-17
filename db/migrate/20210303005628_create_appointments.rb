class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.references :doctor,       null: false, foreign_key: true
      t.references :patient,      null: false, foreign_key: true
      t.date :date,               null: false, default: ''
      t.time :time,               null: false, default: ''

      t.timestamps
    end
  end
end
