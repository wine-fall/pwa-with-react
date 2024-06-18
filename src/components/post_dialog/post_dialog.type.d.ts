export interface PostDialogRef {
  open: () => void;
}

export interface PostItem {

}

export interface PostDialogProps {
  postList: PostItem[]
}

export interface PostFormValues {
  content: string;
  imageList?: string[];
}
