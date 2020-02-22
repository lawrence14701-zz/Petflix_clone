class CreateUser < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :email, null: false
      t.string :username, null: false
    end
      add_index :users, :username
      add_index :users, :email
      add_index :users, :session_token
  end
end
