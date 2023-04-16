class CreateLineItems < ActiveRecord::Migration[7.0]
  def change
    create_table :line_items do |t|
      t.integer :order_id
      t.integer :animal_id
      t.integer :quantity

      t.timestamps
    end
  end
end
