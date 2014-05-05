class NormalizeDocumentHomesMatterTask < ActiveRecord::Migration
  def self.up
    # remove unused columns
    remove_column(:document_homes_matter_tasks, :company_id)
    remove_column(:document_homes_matter_tasks, :updated_at)
    remove_column(:document_homes_matter_tasks, :created_at)
    remove_column(:document_homes_matter_tasks, :deleted_at)
    remove_column(:document_homes_matter_tasks, :permanent_deleted_at)    
  end

  def self.down
    # add removed columns
    add_column(:document_homes_matter_tasks, :company_id,:integer) 
    add_column(:document_homes_matter_tasks, :updated_at,:timestamp) 
    add_column(:document_homes_matter_tasks, :created_at,:timestamp) 
    add_column(:document_homes_matter_tasks, :deleted_at,:timestamp) 
    add_column(:document_homes_matter_tasks, :permanent_deleted_at,:timestamp)     
  end
end
