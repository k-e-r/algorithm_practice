/**
 * 236. Lowest Common Ancestor of a Binary Tree
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * n2（n1 <= n <= n2）n1<n2。したがって、でBSTを再帰的にトラバースします。ノードの値が、n1とn2の両方よりも大きい場合、LCAはノードの左側にあり、n1とn2の両方よりも小さい場合、LCAは右側にあります。それ以外の場合、ルートはLCAです（n1とn2の両方がBSTに存在すると想定）。
 *
 * アルゴリズム：
 * ノードと2つの値n1とn2をとる再帰関数を作成します。
 * 現在のノードの値がn1とn2の両方よりも小さい場合、LCAは右側のサブツリーにあります。右のサブツリーの再帰関数を呼び出します。
 * 現在のノードの値がn1とn2の両方より大きい場合、LCAは左側のサブツリーにあります。左側のサブツリーの再帰関数を呼び出します。
 * 上記の両方のケースがfalseの場合、現在のノードをLCAとして返します。
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// const lowestCommonAncestor = (root, p, q) => {
// var lowestCommonAncestor = function (root, p, q) {
//   let val = null;
//   console.log("root:", root, root.length);
//   for (let idx = 0; idx < root.length; idx++) {
//     // console.log("idx:", idx, "el", el);
//     if (p === root[idx]) {
//       if (val === null) {
//         val = p;
//       }
//     } else if (p === root[2 * idx + 1] && q === root[2 * idx + 2]) {
//       if (val === null) {
//         val = root[idx];
//       }
//     }
//   }
//   console.log("val", val);
//   return val;
// };

function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;
  var resL = lowestCommonAncestor(root.left, p, q);
  var resR = lowestCommonAncestor(root.right, p, q);
  console.log("root", resL && resR ? root : resL || resR);
  return resL && resR ? root : resL || resR;
}

// 1
const baseRoot = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
  p = 5,
  q = 1;

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let root = new TreeNode(baseRoot[0]);
root.left = new TreeNode(baseRoot[1]);
root.right = new TreeNode(baseRoot[2]);
root.left.left = new TreeNode(baseRoot[3]);
root.left.right = new TreeNode(baseRoot[4]);
root.right.left = new TreeNode(baseRoot[5]);
root.right.right = new TreeNode(baseRoot[6]);
root.left.left.left = new TreeNode(baseRoot[7]);
root.left.left.right = new TreeNode(baseRoot[8]);
root.left.right.left = new TreeNode(baseRoot[9]);
root.left.right.right = new TreeNode(baseRoot[10]);

console.log("test:", root);
// console.log("test:", root.left);

// let root = new Node(baseRoot[0]);
// root.left = new Node(baseRoot[1]);
// root.right = new Node(baseRoot[2]);
// root.left.left = new Node(baseRoot[3]);
// root.left.right = new Node(baseRoot[4]);
// root.right.left = new Node(baseRoot[5]);
// root.right.right = new Node(baseRoot[6]);
// root.left.left.left = new Node(baseRoot[7]);
// root.left.left.right = new Node(baseRoot[8]);
// root.left.right.left = new Node(baseRoot[9]);
// root.left.right.right = new Node(baseRoot[10]);

// 2
// const root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
//   p = 5,
//   q = 4;

// 3
// const root = [1, 2],
//   p = 1,
//   q = 2;

// const answer = lowestCommonAncestor(root, p, q);
// console.log("answer", answer);
