import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateSetting as updatSettingApi } from '../../services/apiSettings';
import { toast } from 'react-hot-toast';

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } =
    useMutation({
      mutationFn: updatSettingApi,
      onSuccess: () => {
        toast.success('Setting successfully edited');
        queryClient.invalidateQueries({ queryKey: ['settings'] });
      },
      onError: (err) => toast.error(err.message),
    });

  return { isUpdating, updateSetting };
}
