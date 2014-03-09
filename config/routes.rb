Artographer::Application.routes.draw do

get '/events/all' => 'events#all'
post '/events/:id' => 'events#create'

    resources :site, :events, :users, :sessions

    root to: "site#index"

    get '/signup' => 'users#new'
    delete '/signout' => 'sessions#destroy'
    get '/signin' => 'sessions#new'
    
    
end
