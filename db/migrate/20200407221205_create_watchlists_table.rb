class CreateWatchlistsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :watchlists
    create_join_table :users, :movies, table_name: :watchlists do |t|
      t.index :user_id
      t.index :movie_id
    end
  end
end
