Artographer::Application.routes.draw do
 resources :events, :site

 root to: "site#index"
end
