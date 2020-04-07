class CreateWatchlist < ActiveRecord::Migration[5.2]
  def change
    create_table :watchlists do |t|
      t.integer :userId, null: false 
      t.integer :movieId, null: false
    end
  end
end
