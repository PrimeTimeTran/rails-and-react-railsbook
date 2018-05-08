class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :body
  has_many :comments, serializer: CommentSerializer, polymorphic: true
end
