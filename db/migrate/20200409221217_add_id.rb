class AddId < ActiveRecord::Migration[5.2]
  def change
    add_column :watchlists, :id, :primary_key
  end
end
