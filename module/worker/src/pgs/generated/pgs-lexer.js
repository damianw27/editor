// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';

const serializedATN = [
  4, 0, 50, 345, 6, -1, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7,
  2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7,
  16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2,
  25, 7, 25, 2, 26, 7, 26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 2, 33, 7,
  33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7, 38, 2, 39, 7, 39, 2, 40, 7, 40, 2, 41, 7, 41, 2,
  42, 7, 42, 2, 43, 7, 43, 2, 44, 7, 44, 2, 45, 7, 45, 2, 46, 7, 46, 2, 47, 7, 47, 2, 48, 7, 48, 2, 49, 7, 49, 2, 50, 7,
  50, 2, 51, 7, 51, 2, 52, 7, 52, 2, 53, 7, 53, 2, 54, 7, 54, 2, 55, 7, 55, 2, 56, 7, 56, 2, 57, 7, 57, 2, 58, 7, 58, 2,
  59, 7, 59, 2, 60, 7, 60, 2, 61, 7, 61, 2, 62, 7, 62, 1, 0, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1, 3, 1, 3, 1, 4, 1, 4, 1, 5,
  1, 5, 1, 6, 1, 6, 1, 7, 1, 7, 1, 8, 1, 8, 1, 9, 1, 9, 1, 10, 1, 10, 1, 11, 1, 11, 1, 12, 1, 12, 1, 13, 1, 13, 1, 14,
  1, 14, 1, 15, 1, 15, 1, 16, 1, 16, 1, 17, 1, 17, 1, 18, 1, 18, 1, 19, 1, 19, 1, 20, 1, 20, 1, 21, 1, 21, 1, 22, 1, 22,
  1, 23, 1, 23, 1, 24, 1, 24, 1, 25, 1, 25, 1, 26, 1, 26, 1, 27, 1, 27, 1, 28, 1, 28, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29,
  1, 29, 1, 29, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 31, 1, 31, 1, 31, 1, 31, 1, 31, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32,
  1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 35, 1, 35, 1, 35,
  1, 35, 1, 35, 1, 35, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 38,
  1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 1, 39, 1, 39, 1, 39, 1, 39, 1, 39, 1, 39, 1, 39, 1, 39, 1, 40,
  4, 40, 259, 8, 40, 11, 40, 12, 40, 260, 1, 41, 1, 41, 1, 41, 1, 41, 1, 41, 1, 41, 1, 41, 1, 41, 1, 41, 1, 41, 1, 41,
  3, 41, 274, 8, 41, 1, 42, 1, 42, 1, 43, 1, 43, 1, 44, 1, 44, 1, 45, 1, 45, 1, 46, 1, 46, 1, 47, 1, 47, 1, 48, 1, 48,
  1, 49, 1, 49, 1, 50, 1, 50, 1, 51, 1, 51, 1, 52, 1, 52, 1, 53, 1, 53, 1, 54, 1, 54, 1, 55, 4, 55, 303, 8, 55, 11, 55,
  12, 55, 304, 1, 56, 1, 56, 1, 56, 1, 56, 1, 56, 1, 56, 1, 56, 1, 56, 1, 56, 1, 56, 1, 56, 1, 56, 1, 56, 1, 56, 1, 56,
  1, 56, 1, 56, 1, 56, 3, 56, 325, 8, 56, 1, 57, 1, 57, 3, 57, 329, 8, 57, 1, 58, 1, 58, 3, 58, 333, 8, 58, 1, 59, 1,
  59, 3, 59, 337, 8, 59, 1, 60, 1, 60, 1, 61, 3, 61, 342, 8, 61, 1, 62, 1, 62, 0, 0, 63, 1, 1, 3, 2, 5, 3, 7, 4, 9, 5,
  11, 6, 13, 7, 15, 8, 17, 9, 19, 10, 21, 11, 23, 12, 25, 13, 27, 14, 29, 15, 31, 16, 33, 17, 35, 18, 37, 19, 39, 20,
  41, 21, 43, 22, 45, 23, 47, 24, 49, 25, 51, 26, 53, 27, 55, 28, 57, 29, 59, 30, 61, 31, 63, 32, 65, 33, 67, 34, 69,
  35, 71, 36, 73, 37, 75, 38, 77, 39, 79, 40, 81, 41, 83, 42, 85, 0, 87, 0, 89, 0, 91, 0, 93, 0, 95, 0, 97, 0, 99, 0,
  101, 0, 103, 0, 105, 0, 107, 0, 109, 0, 111, 43, 113, 44, 115, 45, 117, 46, 119, 47, 121, 48, 123, 49, 125, 50, 1, 0,
  35, 2, 0, 67, 67, 99, 99, 2, 0, 82, 82, 114, 114, 2, 0, 69, 69, 101, 101, 2, 0, 65, 65, 97, 97, 2, 0, 84, 84, 116,
  116, 2, 0, 78, 78, 110, 110, 2, 0, 79, 79, 111, 111, 2, 0, 68, 68, 100, 100, 2, 0, 71, 71, 103, 103, 2, 0, 80, 80,
  112, 112, 2, 0, 73, 73, 105, 105, 2, 0, 76, 76, 108, 108, 2, 0, 89, 89, 121, 121, 2, 0, 72, 72, 104, 104, 2, 0, 83,
  83, 115, 115, 2, 0, 66, 66, 98, 98, 2, 0, 77, 77, 109, 109, 8, 0, 160, 160, 5760, 5760, 6158, 6158, 8192, 8202, 8232,
  8233, 8239, 8239, 8287, 8287, 12288, 12288, 1, 0, 12, 12, 1, 0, 96, 96, 1, 0, 30, 30, 2, 0, 39, 39, 92, 92, 1, 0, 29,
  29, 1, 0, 28, 28, 1, 0, 13, 13, 1, 0, 32, 32, 1, 0, 9, 9, 2, 0, 34, 34, 92, 92, 1, 0, 10, 10, 1, 0, 11, 11, 1, 0, 31,
  31, 5, 0, 45, 45, 48, 57, 65, 90, 95, 95, 97, 122, 13, 0, 34, 34, 39, 39, 66, 66, 70, 70, 78, 78, 82, 82, 84, 84, 92,
  92, 98, 98, 102, 102, 110, 110, 114, 114, 116, 116, 2, 0, 85, 85, 117, 117, 2, 0, 65, 70, 97, 102, 348, 0, 1, 1, 0, 0,
  0, 0, 3, 1, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 7, 1, 0, 0, 0, 0, 9, 1, 0, 0, 0, 0, 11, 1, 0, 0, 0, 0, 13, 1, 0, 0, 0, 0,
  15, 1, 0, 0, 0, 0, 17, 1, 0, 0, 0, 0, 19, 1, 0, 0, 0, 0, 21, 1, 0, 0, 0, 0, 23, 1, 0, 0, 0, 0, 25, 1, 0, 0, 0, 0, 27,
  1, 0, 0, 0, 0, 29, 1, 0, 0, 0, 0, 31, 1, 0, 0, 0, 0, 33, 1, 0, 0, 0, 0, 35, 1, 0, 0, 0, 0, 37, 1, 0, 0, 0, 0, 39, 1,
  0, 0, 0, 0, 41, 1, 0, 0, 0, 0, 43, 1, 0, 0, 0, 0, 45, 1, 0, 0, 0, 0, 47, 1, 0, 0, 0, 0, 49, 1, 0, 0, 0, 0, 51, 1, 0,
  0, 0, 0, 53, 1, 0, 0, 0, 0, 55, 1, 0, 0, 0, 0, 57, 1, 0, 0, 0, 0, 59, 1, 0, 0, 0, 0, 61, 1, 0, 0, 0, 0, 63, 1, 0, 0,
  0, 0, 65, 1, 0, 0, 0, 0, 67, 1, 0, 0, 0, 0, 69, 1, 0, 0, 0, 0, 71, 1, 0, 0, 0, 0, 73, 1, 0, 0, 0, 0, 75, 1, 0, 0, 0,
  0, 77, 1, 0, 0, 0, 0, 79, 1, 0, 0, 0, 0, 81, 1, 0, 0, 0, 0, 83, 1, 0, 0, 0, 0, 111, 1, 0, 0, 0, 0, 113, 1, 0, 0, 0, 0,
  115, 1, 0, 0, 0, 0, 117, 1, 0, 0, 0, 0, 119, 1, 0, 0, 0, 0, 121, 1, 0, 0, 0, 0, 123, 1, 0, 0, 0, 0, 125, 1, 0, 0, 0,
  1, 127, 1, 0, 0, 0, 3, 129, 1, 0, 0, 0, 5, 131, 1, 0, 0, 0, 7, 133, 1, 0, 0, 0, 9, 135, 1, 0, 0, 0, 11, 137, 1, 0, 0,
  0, 13, 139, 1, 0, 0, 0, 15, 141, 1, 0, 0, 0, 17, 143, 1, 0, 0, 0, 19, 145, 1, 0, 0, 0, 21, 147, 1, 0, 0, 0, 23, 149,
  1, 0, 0, 0, 25, 151, 1, 0, 0, 0, 27, 153, 1, 0, 0, 0, 29, 155, 1, 0, 0, 0, 31, 157, 1, 0, 0, 0, 33, 159, 1, 0, 0, 0,
  35, 161, 1, 0, 0, 0, 37, 163, 1, 0, 0, 0, 39, 165, 1, 0, 0, 0, 41, 167, 1, 0, 0, 0, 43, 169, 1, 0, 0, 0, 45, 171, 1,
  0, 0, 0, 47, 173, 1, 0, 0, 0, 49, 175, 1, 0, 0, 0, 51, 177, 1, 0, 0, 0, 53, 179, 1, 0, 0, 0, 55, 181, 1, 0, 0, 0, 57,
  183, 1, 0, 0, 0, 59, 185, 1, 0, 0, 0, 61, 192, 1, 0, 0, 0, 63, 197, 1, 0, 0, 0, 65, 202, 1, 0, 0, 0, 67, 207, 1, 0, 0,
  0, 69, 216, 1, 0, 0, 0, 71, 221, 1, 0, 0, 0, 73, 227, 1, 0, 0, 0, 75, 234, 1, 0, 0, 0, 77, 240, 1, 0, 0, 0, 79, 249,
  1, 0, 0, 0, 81, 258, 1, 0, 0, 0, 83, 273, 1, 0, 0, 0, 85, 275, 1, 0, 0, 0, 87, 277, 1, 0, 0, 0, 89, 279, 1, 0, 0, 0,
  91, 281, 1, 0, 0, 0, 93, 283, 1, 0, 0, 0, 95, 285, 1, 0, 0, 0, 97, 287, 1, 0, 0, 0, 99, 289, 1, 0, 0, 0, 101, 291, 1,
  0, 0, 0, 103, 293, 1, 0, 0, 0, 105, 295, 1, 0, 0, 0, 107, 297, 1, 0, 0, 0, 109, 299, 1, 0, 0, 0, 111, 302, 1, 0, 0, 0,
  113, 306, 1, 0, 0, 0, 115, 328, 1, 0, 0, 0, 117, 332, 1, 0, 0, 0, 119, 336, 1, 0, 0, 0, 121, 338, 1, 0, 0, 0, 123,
  341, 1, 0, 0, 0, 125, 343, 1, 0, 0, 0, 127, 128, 5, 59, 0, 0, 128, 2, 1, 0, 0, 0, 129, 130, 5, 123, 0, 0, 130, 4, 1,
  0, 0, 0, 131, 132, 5, 125, 0, 0, 132, 6, 1, 0, 0, 0, 133, 134, 5, 44, 0, 0, 134, 8, 1, 0, 0, 0, 135, 136, 5, 40, 0, 0,
  136, 10, 1, 0, 0, 0, 137, 138, 5, 41, 0, 0, 138, 12, 1, 0, 0, 0, 139, 140, 5, 91, 0, 0, 140, 14, 1, 0, 0, 0, 141, 142,
  5, 93, 0, 0, 142, 16, 1, 0, 0, 0, 143, 144, 5, 58, 0, 0, 144, 18, 1, 0, 0, 0, 145, 146, 5, 124, 0, 0, 146, 20, 1, 0,
  0, 0, 147, 148, 5, 38, 0, 0, 148, 22, 1, 0, 0, 0, 149, 150, 5, 63, 0, 0, 150, 24, 1, 0, 0, 0, 151, 152, 5, 45, 0, 0,
  152, 26, 1, 0, 0, 0, 153, 154, 5, 173, 0, 0, 154, 28, 1, 0, 0, 0, 155, 156, 5, 8208, 0, 0, 156, 30, 1, 0, 0, 0, 157,
  158, 5, 8209, 0, 0, 158, 32, 1, 0, 0, 0, 159, 160, 5, 8210, 0, 0, 160, 34, 1, 0, 0, 0, 161, 162, 5, 8211, 0, 0, 162,
  36, 1, 0, 0, 0, 163, 164, 5, 8212, 0, 0, 164, 38, 1, 0, 0, 0, 165, 166, 5, 8213, 0, 0, 166, 40, 1, 0, 0, 0, 167, 168,
  5, 8722, 0, 0, 168, 42, 1, 0, 0, 0, 169, 170, 5, 65112, 0, 0, 170, 44, 1, 0, 0, 0, 171, 172, 5, 65123, 0, 0, 172, 46,
  1, 0, 0, 0, 173, 174, 5, 65293, 0, 0, 174, 48, 1, 0, 0, 0, 175, 176, 5, 62, 0, 0, 176, 50, 1, 0, 0, 0, 177, 178, 5,
  10217, 0, 0, 178, 52, 1, 0, 0, 0, 179, 180, 5, 12297, 0, 0, 180, 54, 1, 0, 0, 0, 181, 182, 5, 65125, 0, 0, 182, 56, 1,
  0, 0, 0, 183, 184, 5, 65310, 0, 0, 184, 58, 1, 0, 0, 0, 185, 186, 7, 0, 0, 0, 186, 187, 7, 1, 0, 0, 187, 188, 7, 2, 0,
  0, 188, 189, 7, 3, 0, 0, 189, 190, 7, 4, 0, 0, 190, 191, 7, 2, 0, 0, 191, 60, 1, 0, 0, 0, 192, 193, 7, 5, 0, 0, 193,
  194, 7, 6, 0, 0, 194, 195, 7, 7, 0, 0, 195, 196, 7, 2, 0, 0, 196, 62, 1, 0, 0, 0, 197, 198, 7, 2, 0, 0, 198, 199, 7,
  7, 0, 0, 199, 200, 7, 8, 0, 0, 200, 201, 7, 2, 0, 0, 201, 64, 1, 0, 0, 0, 202, 203, 7, 6, 0, 0, 203, 204, 7, 9, 0, 0,
  204, 205, 7, 2, 0, 0, 205, 206, 7, 5, 0, 0, 206, 66, 1, 0, 0, 0, 207, 208, 7, 6, 0, 0, 208, 209, 7, 9, 0, 0, 209, 210,
  7, 4, 0, 0, 210, 211, 7, 10, 0, 0, 211, 212, 7, 6, 0, 0, 212, 213, 7, 5, 0, 0, 213, 214, 7, 3, 0, 0, 214, 215, 7, 11,
  0, 0, 215, 68, 1, 0, 0, 0, 216, 217, 7, 4, 0, 0, 217, 218, 7, 12, 0, 0, 218, 219, 7, 9, 0, 0, 219, 220, 7, 2, 0, 0,
  220, 70, 1, 0, 0, 0, 221, 222, 7, 8, 0, 0, 222, 223, 7, 1, 0, 0, 223, 224, 7, 3, 0, 0, 224, 225, 7, 9, 0, 0, 225, 226,
  7, 13, 0, 0, 226, 72, 1, 0, 0, 0, 227, 228, 7, 14, 0, 0, 228, 229, 7, 4, 0, 0, 229, 230, 7, 1, 0, 0, 230, 231, 7, 10,
  0, 0, 231, 232, 7, 0, 0, 0, 232, 233, 7, 4, 0, 0, 233, 74, 1, 0, 0, 0, 234, 235, 7, 11, 0, 0, 235, 236, 7, 6, 0, 0,
  236, 237, 7, 6, 0, 0, 237, 238, 7, 14, 0, 0, 238, 239, 7, 2, 0, 0, 239, 76, 1, 0, 0, 0, 240, 241, 7, 3, 0, 0, 241,
  242, 7, 15, 0, 0, 242, 243, 7, 14, 0, 0, 243, 244, 7, 4, 0, 0, 244, 245, 7, 1, 0, 0, 245, 246, 7, 3, 0, 0, 246, 247,
  7, 0, 0, 0, 247, 248, 7, 4, 0, 0, 248, 78, 1, 0, 0, 0, 249, 250, 7, 10, 0, 0, 250, 251, 7, 16, 0, 0, 251, 252, 7, 9,
  0, 0, 252, 253, 7, 6, 0, 0, 253, 254, 7, 1, 0, 0, 254, 255, 7, 4, 0, 0, 255, 256, 7, 14, 0, 0, 256, 80, 1, 0, 0, 0,
  257, 259, 3, 83, 41, 0, 258, 257, 1, 0, 0, 0, 259, 260, 1, 0, 0, 0, 260, 258, 1, 0, 0, 0, 260, 261, 1, 0, 0, 0, 261,
  82, 1, 0, 0, 0, 262, 274, 3, 99, 49, 0, 263, 274, 3, 101, 50, 0, 264, 274, 3, 105, 52, 0, 265, 274, 3, 107, 53, 0,
  266, 274, 3, 85, 42, 0, 267, 274, 3, 97, 48, 0, 268, 274, 3, 95, 47, 0, 269, 274, 3, 93, 46, 0, 270, 274, 3, 89, 44,
  0, 271, 274, 3, 109, 54, 0, 272, 274, 7, 17, 0, 0, 273, 262, 1, 0, 0, 0, 273, 263, 1, 0, 0, 0, 273, 264, 1, 0, 0, 0,
  273, 265, 1, 0, 0, 0, 273, 266, 1, 0, 0, 0, 273, 267, 1, 0, 0, 0, 273, 268, 1, 0, 0, 0, 273, 269, 1, 0, 0, 0, 273,
  270, 1, 0, 0, 0, 273, 271, 1, 0, 0, 0, 273, 272, 1, 0, 0, 0, 274, 84, 1, 0, 0, 0, 275, 276, 7, 18, 0, 0, 276, 86, 1,
  0, 0, 0, 277, 278, 8, 19, 0, 0, 278, 88, 1, 0, 0, 0, 279, 280, 7, 20, 0, 0, 280, 90, 1, 0, 0, 0, 281, 282, 8, 21, 0,
  0, 282, 92, 1, 0, 0, 0, 283, 284, 7, 22, 0, 0, 284, 94, 1, 0, 0, 0, 285, 286, 7, 23, 0, 0, 286, 96, 1, 0, 0, 0, 287,
  288, 7, 24, 0, 0, 288, 98, 1, 0, 0, 0, 289, 290, 7, 25, 0, 0, 290, 100, 1, 0, 0, 0, 291, 292, 7, 26, 0, 0, 292, 102,
  1, 0, 0, 0, 293, 294, 8, 27, 0, 0, 294, 104, 1, 0, 0, 0, 295, 296, 7, 28, 0, 0, 296, 106, 1, 0, 0, 0, 297, 298, 7, 29,
  0, 0, 298, 108, 1, 0, 0, 0, 299, 300, 7, 30, 0, 0, 300, 110, 1, 0, 0, 0, 301, 303, 7, 31, 0, 0, 302, 301, 1, 0, 0, 0,
  303, 304, 1, 0, 0, 0, 304, 302, 1, 0, 0, 0, 304, 305, 1, 0, 0, 0, 305, 112, 1, 0, 0, 0, 306, 324, 5, 92, 0, 0, 307,
  325, 7, 32, 0, 0, 308, 309, 7, 33, 0, 0, 309, 310, 3, 115, 57, 0, 310, 311, 3, 115, 57, 0, 311, 312, 3, 115, 57, 0,
  312, 313, 3, 115, 57, 0, 313, 325, 1, 0, 0, 0, 314, 315, 7, 33, 0, 0, 315, 316, 3, 115, 57, 0, 316, 317, 3, 115, 57,
  0, 317, 318, 3, 115, 57, 0, 318, 319, 3, 115, 57, 0, 319, 320, 3, 115, 57, 0, 320, 321, 3, 115, 57, 0, 321, 322, 3,
  115, 57, 0, 322, 323, 3, 115, 57, 0, 323, 325, 1, 0, 0, 0, 324, 307, 1, 0, 0, 0, 324, 308, 1, 0, 0, 0, 324, 314, 1, 0,
  0, 0, 325, 114, 1, 0, 0, 0, 326, 329, 3, 117, 58, 0, 327, 329, 3, 123, 61, 0, 328, 326, 1, 0, 0, 0, 328, 327, 1, 0, 0,
  0, 329, 116, 1, 0, 0, 0, 330, 333, 3, 125, 62, 0, 331, 333, 3, 119, 59, 0, 332, 330, 1, 0, 0, 0, 332, 331, 1, 0, 0, 0,
  333, 118, 1, 0, 0, 0, 334, 337, 3, 121, 60, 0, 335, 337, 2, 56, 57, 0, 336, 334, 1, 0, 0, 0, 336, 335, 1, 0, 0, 0,
  337, 120, 1, 0, 0, 0, 338, 339, 2, 49, 55, 0, 339, 122, 1, 0, 0, 0, 340, 342, 7, 34, 0, 0, 341, 340, 1, 0, 0, 0, 342,
  124, 1, 0, 0, 0, 343, 344, 5, 48, 0, 0, 344, 126, 1, 0, 0, 0, 9, 0, 260, 273, 304, 324, 328, 332, 336, 341, 0,
];

const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map((ds, index) => new antlr4.dfa.DFA(ds, index));

export default class PgsLexer extends antlr4.Lexer {
  static grammarFileName = 'pgs.g4';
  static channelNames = ['DEFAULT_TOKEN_CHANNEL', 'HIDDEN'];
  static modeNames = ['DEFAULT_MODE'];
  static literalNames = [
    null,
    "';'",
    "'{'",
    "'}'",
    "','",
    "'('",
    "')'",
    "'['",
    "']'",
    "':'",
    "'|'",
    "'&'",
    "'?'",
    "'-'",
    "'\\u00AD'",
    "'\\u2010'",
    "'\\u2011'",
    "'\\u2012'",
    "'\\u2013'",
    "'\\u2014'",
    "'\\u2015'",
    "'\\u2212'",
    "'\\uFE58'",
    "'\\uFE63'",
    "'\\uFF0D'",
    "'>'",
    "'\\u27E9'",
    "'\\u3009'",
    "'\\uFE65'",
    "'\\uFF1E'",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "'0'",
  ];

  static symbolicNames = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    'CREATE',
    'NODE',
    'EDGE',
    'OPEN',
    'OPTIONAL',
    'TYPE',
    'GRAPH',
    'STRICT',
    'LOOSE',
    'ABSTRACT',
    'IMPORTS',
    'SP',
    'WHITESPACE',
    'StringLiteral',
    'EscapedChar',
    'HexDigit',
    'Digit',
    'NonZeroDigit',
    'NonZeroOctDigit',
    'HexLetter',
    'ZeroDigit',
  ];

  static ruleNames = [
    'T__0',
    'T__1',
    'T__2',
    'T__3',
    'T__4',
    'T__5',
    'T__6',
    'T__7',
    'T__8',
    'T__9',
    'T__10',
    'T__11',
    'T__12',
    'T__13',
    'T__14',
    'T__15',
    'T__16',
    'T__17',
    'T__18',
    'T__19',
    'T__20',
    'T__21',
    'T__22',
    'T__23',
    'T__24',
    'T__25',
    'T__26',
    'T__27',
    'T__28',
    'CREATE',
    'NODE',
    'EDGE',
    'OPEN',
    'OPTIONAL',
    'TYPE',
    'GRAPH',
    'STRICT',
    'LOOSE',
    'ABSTRACT',
    'IMPORTS',
    'SP',
    'WHITESPACE',
    'FF',
    'EscapedSymbolicName_0',
    'RS',
    'StringLiteral_1',
    'GS',
    'FS',
    'CR',
    'SPACE',
    'TAB',
    'StringLiteral_0',
    'LF',
    'VT',
    'US',
    'StringLiteral',
    'EscapedChar',
    'HexDigit',
    'Digit',
    'NonZeroDigit',
    'NonZeroOctDigit',
    'HexLetter',
    'ZeroDigit',
  ];

  constructor(input) {
    super(input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
  }

  get atn() {
    return atn;
  }
}

PgsLexer.EOF = antlr4.Token.EOF;
PgsLexer.T__0 = 1;
PgsLexer.T__1 = 2;
PgsLexer.T__2 = 3;
PgsLexer.T__3 = 4;
PgsLexer.T__4 = 5;
PgsLexer.T__5 = 6;
PgsLexer.T__6 = 7;
PgsLexer.T__7 = 8;
PgsLexer.T__8 = 9;
PgsLexer.T__9 = 10;
PgsLexer.T__10 = 11;
PgsLexer.T__11 = 12;
PgsLexer.T__12 = 13;
PgsLexer.T__13 = 14;
PgsLexer.T__14 = 15;
PgsLexer.T__15 = 16;
PgsLexer.T__16 = 17;
PgsLexer.T__17 = 18;
PgsLexer.T__18 = 19;
PgsLexer.T__19 = 20;
PgsLexer.T__20 = 21;
PgsLexer.T__21 = 22;
PgsLexer.T__22 = 23;
PgsLexer.T__23 = 24;
PgsLexer.T__24 = 25;
PgsLexer.T__25 = 26;
PgsLexer.T__26 = 27;
PgsLexer.T__27 = 28;
PgsLexer.T__28 = 29;
PgsLexer.CREATE = 30;
PgsLexer.NODE = 31;
PgsLexer.EDGE = 32;
PgsLexer.OPEN = 33;
PgsLexer.OPTIONAL = 34;
PgsLexer.TYPE = 35;
PgsLexer.GRAPH = 36;
PgsLexer.STRICT = 37;
PgsLexer.LOOSE = 38;
PgsLexer.ABSTRACT = 39;
PgsLexer.IMPORTS = 40;
PgsLexer.SP = 41;
PgsLexer.WHITESPACE = 42;
PgsLexer.StringLiteral = 43;
PgsLexer.EscapedChar = 44;
PgsLexer.HexDigit = 45;
PgsLexer.Digit = 46;
PgsLexer.NonZeroDigit = 47;
PgsLexer.NonZeroOctDigit = 48;
PgsLexer.HexLetter = 49;
PgsLexer.ZeroDigit = 50;
