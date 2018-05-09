class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :body, :created_at
  has_many :comments
end