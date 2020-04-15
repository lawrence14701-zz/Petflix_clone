class User < ApplicationRecord

    validates :username, :session_token, :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :username, uniqueness: true
    after_initialize :ensure_session_token
    attr_reader :password

    has_many :watchlists, dependent: :destroy
    has_and_belongs_to_many :movies, join_table: :Watchlist


    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.find_by_credentials(username,password)
        user = User.find_by(username: username)
        return user if user && user.is_password?(password)
        nil 
    end


    def reset_session_token!
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

    private

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end


end