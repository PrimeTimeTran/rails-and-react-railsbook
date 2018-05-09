class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :body, :created_at, :commentable_id
end
