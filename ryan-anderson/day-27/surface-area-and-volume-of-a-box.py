def get_size(w,h,d):
    sa = 2 * (w * h + w * d + h * d)
    v = w  * h * d
    return[sa, v]

#Surface area = sum of areas of each face
#volume = product of dimensions