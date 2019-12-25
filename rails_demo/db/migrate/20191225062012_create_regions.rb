class CreateRegions < ActiveRecord::Migration[6.0]
  def change
    create_table :regions do |t|
      t.string :name, limit: 100

      t.timestamps
    end
  end
end
