class AddClosingToEvents < ActiveRecord::Migration
  def change
    add_column :events, :closing, :string
  end
end
