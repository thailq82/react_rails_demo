class CreatePeople < ActiveRecord::Migration[6.0]
  def change
    create_table :people do |t|
      t.string :name, null: true, limit: 100
      t.string :address
      t.references :city, null: true, foreign_key: true
      t.references :region, null: true, foreign_key: true
      t.references :country, null: true, foreign_key: true
      t.date :birthday

      t.timestamps
    end
    # add_index :people
  end
end
