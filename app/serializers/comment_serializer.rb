class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :body, :id, :created_at
  belongs_to :post
end
