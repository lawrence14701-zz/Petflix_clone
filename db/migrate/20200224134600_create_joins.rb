class CreateJoins < ActiveRecord::Migration[5.2]
  def change
    create_table :joins do |t|
      t.integer :genreId
      t.integer :movieId
    end
    add_index :joins, :genreId
    add_index :joins, :movieId
  end
end
